# What Is a Builder pattern
> “Separate the construction of a complex object from its representation so that the same construction process can create different representations.”
> -- <cite>[GoF]</cite>

> The process of constructing an object should be generic so that it can be used to create different representations of the same object.
> -- <cite>[GeeksForGeeks][1]</cite>

# When to use
> - It is used to construct a complex object step by step and the final step will return the object. 
> - It is used when you want to break down the construction of complex object into seperate concerns.


# Pros
> - The parameters to the constructor are reduced and are provided in highly readable method calls.
> - It helps minimizing the number of parameters in constructor and thus there is no need to pass in null for optional parameters to the constructor.object.
> Immutable objects can be build without much complex logic in object building process.
> -- <cite>[GeeksForGeeks][1]</cite>


# Cons
> - Requires creating a separate ConcreteBuilder for each different type of Product.
> -- <cite>[GeeksForGeeks][1]</cite>

[1]: https://www.geeksforgeeks.org/builder-design-pattern/
