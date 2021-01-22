# What Is a Decorator pattern

> It helps extend the functionality of an object. This pattern is used to dynamically extend or even change the behavior of an object during run-time.
> -- <cite>[LogRocket][1]</cite>

# Pros

> - You can extend an object’s behavior without making a new subclass.
> - You can add or remove responsibilities from an object at runtime.
> - You can combine several behaviors by wrapping an object into multiple decorators.
> - Single Responsibility Principle. You can divide a monolithic class that implements many possible variants of behavior into several smaller classes.
>   -- <cite>[Refactoring.Guru][2]</cite>

# Cons

> - It’s hard to remove a specific wrapper from the wrappers stack.
> - It’s hard to implement a decorator in such a way that its behavior doesn’t depend on the order in the decorators stack.
> - The initial configuration code of layers might look pretty ugly.
>   -- <cite>[Refactoring.Guru][2]</cite>

[1]: https://blog.logrocket.com/design-patterns-in-node-js-2/
[2]: https://refactoring.guru/design-patterns/decorator
