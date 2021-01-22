# What Is a Adapter pattern

> Adapters basically allow objects or classes to function together which normally couldn't due to their incompatible interfaces. The adapter translates calls to its interface into calls to the original interface and the code required to achieve this is usually quite minimal.
> -- <cite>[Learning JavaScript Design Patterns][1]</cite>

# Pros

> -Single Responsibility Principle. You can separate the interface or data conversion code from the primary business logic of the program.
>
> - Open/Closed Principle. You can introduce new types of adapters into the program without breaking the existing client code, as long as they work with the adapters through the client interface.
>   -- <cite>[Refactoring.Guru][2]</cite>

# Cons

> - The overall complexity of the code increases because you need to introduce a set of new interfaces and classes. Sometimes it’s simpler just to change the service class so that it matches the rest of your code.
>   -- <cite>[Refactoring.Guru][2]</cite>

[1]: https://addyosmani.com/resources/essentialjsdesignpatterns/book/#wrapperpatternjquery
[2]: https://refactoring.guru/design-patterns/adapter
