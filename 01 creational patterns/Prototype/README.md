# What Is a Prototype pattern
> Prototype allows us to hide the complexity of making new instances from the client. 
>   The concept is to copy an existing object rather than creating a new instance from scratch, something that may include costly operations. The existing object acts as a prototype and contains the state of the object. The newly copied object may change same properties only if required. This approach saves costly resources and time, especially when the object creation is a heavy process.
> -- <cite>[GeeksForGeeks][1]</cite>

# Pros
> - You can clone objects without coupling to their concrete classes.
> - You can get rid of repeated initialization code in favor of cloning pre-built prototypes.
> - You can produce complex objects more conveniently.
> - You get an alternative to inheritance when dealing with configuration presets for complex objects.
> -- <cite>[GeeksForGeeks][2]</cite>

# Cons
> - Cloning complex objects that have circular references might be very tricky.
> -- <cite>[GeeksForGeeks][2]</cite>

[1]: https://www.geeksforgeeks.org/prototype-design-pattern/
[2]: https://refactoring.guru/design-patterns/prototype
