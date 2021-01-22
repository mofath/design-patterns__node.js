# What Is a Command pattern

> "Encapsulate a request as an object, thereby letting you parameterize with different requests, queue or log requests, and support undoable operations."

> -- <cite>[GoF]</cite>

> The Command pattern suggests that clients shouldn’t send requests directly. Instead, you should extract all of the request details, such as the object being called, the name of the method and the list of arguments into a separate command class with a single method that triggers this request. The client doesn’t need to know what business logic object will receive the request and how it’ll be processed. The client just triggers the command, which handles all the details.

> -- <cite>[Refactoring.Guru][1]</cite>

# Pros

> - Single Responsibility Principle: decoupling clients that invoke operations from classes that perform these operations.
> - Open/Closed Principle. You can introduce new commands into the app without breaking existing client code.
> - You can assemble a set of simple commands into a complex one.
> -- <cite>[Refactoring.Guru][1]</cite>

# Cons

> - The code may become more complicated since you’re introducing a whole new layer between senders and receivers.
> -- <cite>[Refactoring.Guru][1]</cite>

[1]: https://refactoring.guru/design-patterns/command