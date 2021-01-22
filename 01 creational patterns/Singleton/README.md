# What Is a Singleton Pattern

> Singleton is a design pattern that restricts the instantiation of a class to one object.

# Usage

> - Manage global application state.
> - Store data in memory in a client-side web application (e.g. stores in Flux).
> - Manage Database Connections.

# Implementation

> The constructor starts with checking whether Singleton.instance exists. If the condition is met, it means that the class has been already created and that old instance can be returned instead creating new one.
> -- <cite>[Sitepoint][1]</cite>

# Pros

> - You can be sure that a class has only a single instance.
> - You gain a global access point to that instance.
> - The singleton object is initialized only when it’s requested for the first time.
>   -- <cite>[Refactoring.Guru][2]</cite>

# Cons

> - Its constructor has to return the instance.
> - It cannot be extended nor modified by any ancestor and extending will only link to the initial instance.
>   -- <cite>[Refactoring.Guru][2]</cite>
> - The pattern requires special treatment in a multithreaded environment so that multiple threads won’t create a singleton object several times.
>   -- <cite>[Refactoring.Guru][2]</cite>

[1]: https://www.sitepoint.com/javascript-design-patterns-singleton/
[2]: https://refactoring.guru/design-patterns/singleton
