# What Is a Strategy design pattern

> Define a family of algorithms, encapsulated each one, and make them interchangeable. Strategy lets algorithm vary independently from the clients that use it.
> -- <cite>[GoF]</cite>

# Pros

> - You can swap algorithms used inside an object at runtime.
> - You can isolate the implementation details of an algorithm from the client that uses it.
> - You can replace inheritance with composition.
> - Open/Closed Principle. Introducing new strategies without having to change the context.
>   -- <cite>[Refactoring.Guru][1]</cite>

# Cons

> - If you only have a couple of algorithms and they rarely change, there’s no real reason to overcomplicate the program with new classes and interfaces that come along with the pattern.
> - Clients must be aware of the differences between strategies to be able to select a proper one.
> - A lot of modern programming languages have functional type support that lets you implement different versions of an algorithm inside a set of anonymous functions. Then you could use these functions exactly as you’d have used the strategy objects, but without bloating your code with extra classes and interfaces.

> -- <cite>[Refactoring.Guru][1]</cite>

[1]: https://refactoring.guru/design-patterns/strategy
