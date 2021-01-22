# What Is a Proxy pattern

> It lets you provide a substitute or placeholder for another object.
>
> A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

> -- <cite>[ٌRefactoring Guru/][1]</cite>

# Problem

> You may have a massive object that consumes a vast amount of system resources. You need it from time to time, but not always.
>
> You could implement lazy initialization: create this object only when it’s actually needed. All of the object’s clients would need to execute some deferred initialization code. Unfortunately, this would probably cause a lot of code duplication.
> -- <cite>[ٌRefactoring Guru/][1]</cite>

# Solution

> The Proxy pattern suggests that you create a new proxy class with the same interface as an original service object. Then you update your app so that it passes the proxy object to all of the original object’s clients. Upon receiving a request from a client, the proxy creates a real service object and delegates all the work to it.
>
> If you need to execute something either before or after the primary logic of the class, the proxy lets you do this without changing that class. Since the proxy implements the same interface as the original class, it can be passed to any client that expects a real service object.
> -- <cite>[ٌRefactoring Guru/][1]</cite>

# Usage

> Lazy initialization
> logging.
> Access control.
> caching.

# Implementation

In this example, we have created a proxy class FSProxy for the file system class that perform checking file extension before reading, and allow reading for Markdown files only.

# Pros

> - You can control the service object without clients knowing about it.
> - You can manage the lifecycle of the service object when clients don’t care about it.
> - The proxy works even if the service object isn’t ready or is not available.
> - Open/Closed Principle. You can introduce new proxies without changing the service or clients.  
>   -- <cite>[ٌRefactoring Guru/][1]</cite>

# Cons

> - The code may become more complicated since you need to introduce a lot of new classes.
> - The response from the service might get delayed.
> -- <cite>[ٌRefactoring Guru/][1]</cite>

[1]: https://refactoring.guru/design-patterns/proxy
