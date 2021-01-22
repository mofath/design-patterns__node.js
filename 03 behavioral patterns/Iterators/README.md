# What Is a Iterator pattern

> "Provide a way to access the elements of a collection sequentially without exposing its underlying representation (list, stack, tree, etc.)."
> -- <cite>[GoF]</cite>

# Pros

> - Single Responsibility Principle. You can clean up the client code and the collections by extracting bulky traversal algorithms into separate classes.
> - Open/Closed Principle. You can implement new types of collections and iterators and pass them to existing code without breaking anything.
> - You can iterate over the same collection in parallel because each iterator object contains its own iteration state.
> - For the same reason, you can delay an iteration and continue it when needed.
>   -- <cite>[Refactoring.Guru][1]</cite>

# Cons

> - Applying the pattern can be an overkill if your app only works with simple collections.
> - Using an iterator may be less efficient than going through elements of some specialized collections directly.

> -- <cite>[Refactoring.Guru][1]</cite>

[1]: https://refactoring.guru/design-patterns/iterator
