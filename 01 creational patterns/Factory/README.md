# What Is a Factory design pattern

> Define an interface for creating an object, but let subclasses decide which class to instantiate.
> -- <cite>[GoF]</cite>

# Pros

> - You can clone objects without coupling to their concrete classes.
> - You can get rid of repeated initialization code in favor of cloning pre-built prototypes.
> - You can produce complex objects more conveniently.
> - You get an alternative to inheritance when dealing with configuration presets for complex objects.
<cite>[Refactoring.Guru][1]</cite>

# Cons

> - Cloning complex objects that have circular references might be very tricky.
>   <cite>[Refactoring.Guru][1]</cite>

[1]: https://refactoring.guru/design-patterns/prototype
