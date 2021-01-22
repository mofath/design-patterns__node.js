# What Is a Factory design pattern

> Define an interface for creating an object, but let subclasses decide which class to instantiate.
> -- <cite>[GoF]</cite>

# Pros

> - You avoid tight coupling between the creator and the concrete products.
> - Single Responsibility Principle. You can move the product creation code into one place in the program, making the code easier to support.
> - Open/Closed Principle. You can introduce new types of products into the program without breaking existing client code.
>   <cite>[Refactoring.Guru][1]</cite>

# Cons

> - The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes.

> <cite>[Refactoring.Guru][1]</cite>

[1]: https://refactoring.guru/design-patterns/factory-method
