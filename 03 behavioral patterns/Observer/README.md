# What Is a Opserver pattern

> "Define a one-to-many dependency between objects so that when object changes state, all its dependents are notified and updated automatically."
> -- <cite>[GoF]</cite>

# Pros

> - Open/Closed Principle. You can introduce new subscriber classes without having to change the publisher’s code (and vice versa if there’s a publisher interface).
> - You can establish relations between objects at runtime.
>   -- <cite>[Refactoring.Guru][1]</cite>

# Cons

> - Subscribers are notified in random order.
>   -- <cite>[Refactoring.Guru][1]</cite>

[1]: https://refactoring.guru/design-patterns/observer
