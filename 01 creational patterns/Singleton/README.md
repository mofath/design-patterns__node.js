# What Is a Singleton
> Singleton is a design pattern that restricts the instantiation of a class to one object.

# Usage
>  - Manage global application state.
>  - Store data in memory in a client-side web application (e.g. stores in Flux).
>  - Manage Database Connections.

# Caveats
>  - Its constructor has to return the instance.
>  - Store data in memory in a client-side web application (e.g. stores in Flux).
>  - It cannot be extended nor modified by any ancestor abd extending will only link to the initial instance.


# Implementation 
>  The constructor starts with checking whether Singleton.instance exists. If the condition is met, it means that the class has been already created and that old instance can be returned instead creating new one.
> -- <cite>[Samier Saeed][1]</cite>

[1]: https://www.sitepoint.com/javascript-design-patterns-singleton/