# Building a Diary Card App: Architecture Choices and Regrets

After building my [mood journal app](/blog/diarycard), I realized I'd made a bunch of architectural decisions—some good, some questionable. Here's what went into it and why.

### SwiftData: The Easy Choice

I went with SwiftData for persistence because, honestly, it was the path of least resistance. Apple's official framework, minimal boilerplate, and it Just Works™. I didn't want to spend weeks learning Core Data or messing with SQLite when I could be building features.

The decision paid off. Cards auto-save, I get iCloud sync for free (which I haven't enabled but it's nice to know it's there), and the `@Model` macro handles most of the tedious stuff.

```swift
@Model
class Card {
    var date: Date
    var attributes: [String: Value]
    // SwiftData handles the rest
}
```

### Schema as a Dictionary: Flexible but Messy

I made each card's data a flat dictionary of `String: Value` where the keys encode structure like `"behaviour.energy"` or `"text.5-minute journal:gratitude"`.

Why? **Flexibility**. I wanted to add/remove/reorder fields without touching database migrations or model classes. Just update the schema dictionary and everything adapts.

```swift
static let attributes: OrderedDictionary<String, Value> = [
    "behaviour.1.energy": .int(1),
    "emotions.2.anxiety": .int(3),
    "skills.1.distress tolerance": .stringArray(["ACCEPTS"])
]
```

The string keys have a mini syntax:
- `group.sortOrder.fieldName` - standard field
- `group.sortOrder.fieldName:subfield` - nested field (like "suicidal ideation:active")

It works. But it's also stringly-typed chaos. Typos won't get caught until runtime. I've learned to live with it.

### Modular Views: Actually Worth the Effort

I started with massive view files and quickly realized that was unsustainable. Now every view has computed properties for its components:

```swift
var body: some View {
    ZStack {
        backgroundLayer
        layer0  // main content
        layer1  // tap background for dismissal
        layer2  // popovers and modals
    }
}
```

Each layer, button, and section gets extracted:

```swift
private var settingsToolbar: some ToolbarContent {
    ToolbarItem(placement: .topBarLeading) {
        // settings button implementation
    }
}
```

This pattern makes `body` readable and makes me feel like I know what I'm doing. Both are important.

### Glass Effects Everywhere

iOS's `.glassEffect()` modifier is criminally underused. I slapped it on everything—buttons, cards, popovers. The trick is specifying the shape:

```swift
.glassEffect(
    .regular.tint(.black.opacity(0.9)),
    in: .rect(cornerRadius: 12)
)
```

Without the `in:` parameter, it defaults to a capsule shape which looks weird on rectangular content. Took me embarrassingly long to figure that out.

### The Info Icon Pattern

Recently I added help tooltips next to field names. The pattern ended up clean:

1. `FieldDescriptions` dictionary maps field keys to help text
2. Each field name checks if a description exists
3. If yes, show an ⓘ icon
4. Tap it, get a popover

For skills, I went further—tap the icon, long press, OR swipe vertically to show descriptions. Swipe was an afterthought but it's weirdly satisfying.

### Notifications: UserDefaults for Everything

The daily reminder uses `NotificationManager` as a singleton with `@Published` properties backed by UserDefaults:

```swift
@Published var isEnabled: Bool {
    didSet {
        UserDefaults.standard.set(isEnabled, forKey: "notificationEnabled")
        if isEnabled { scheduleNotification() }
    }
}
```

Not fancy, but it works. Settings persist, notifications reschedule automatically on changes, and I didn't need to build a settings database.

I made the notification text configurable because why not? If you're going to get nagged daily, might as well customize the nagging.

### What I'd Do Differently

**String keys**. If I started over, I'd probably use a proper type-safe schema with enums or structs. The flexibility was nice early on but now it's just tech debt waiting to bite me.

**More protocols**. Some parts of the codebase are too coupled. Views know too much about the model. A better separation would help if I ever wanted to, say, support multiple card types or add data from other sources.

**Tests**. I have exactly zero tests. This is fine until it isn't. I keep telling myself I'll add them "soon."

### Why It Works

Despite the rough edges, the app does what I need. The architecture is simple enough that I can jump in, add features (like today's notification system), and not break everything.

The modular view pattern keeps code readable. SwiftData keeps persistence trivial. String-based schema keeps it flexible.

Is it perfect? No. Is it mine and does it work? Yes.

And honestly, building it was more fun than using it, which is the real reason any side project exists.
