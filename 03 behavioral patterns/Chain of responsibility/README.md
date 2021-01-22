# What Is a Chain of Responsibility pattern

> As the name suggests, the chain of responsibility pattern creates a chain of receiver objects for a request. This pattern decouples sender and receiver of a request based on type of request. This pattern comes under behavioral patterns.
> -- <cite>[Tutorials Point][1]</cite>

In this pattern, normally each receiver contains reference to another receiver. If one object cannot handle the request then it passes the same to the next receiver and so on.

> -- <cite>[Tutorials Point][1]</cite>

# Pros

> - You can control the order of request handling.
> - Single Responsibility Principle. You can decouple classes that invoke operations from classes that perform operations.
> - Open/Closed Principle. You can introduce new handlers into the app without breaking the existing client code.
>   -- <cite>[Tutorials Point][2]</cite>

# Cons

> - Some requests may end up unhandled.
>   -- <cite>[Tutorials Point][1]</cite>

[1]: https://www.tutorialspoint.com/design_pattern/chain_of_responsibility_pattern.html
[2]: https://refactoring.guru/design-patterns/chain-of-responsibility
