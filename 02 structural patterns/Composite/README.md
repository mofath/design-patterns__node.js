# What Is a Composite pattern

> “Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects Uniformly”
> -- <cite>[GoF]</cite>

# Implementation

> Assume there is a restaurant that offers different kinds of food some of them are single item(ex burger) and others are Combo-meal (ex burger and fries), to get its menu we need name and price of each item, the actual price in case of a single item or total for a combo, to apply composite pattern at this example we need to identify three participants: Component, Leaf, and Composite.

> ### Leaf (Single menu item (burger, pizza .. etc))
>
> Defines the behavior of primitive objects that have no children

> ### Composite (Meal)
>
> Defines behavior for components having children including children management operations.

# Pros

> - You can work with complex tree structures more conveniently: use polymorphism and recursion to your advantage.
>   -Open/Closed Principle. You can introduce new element types into the app without breaking the existing code, which now works with the object tree.
>   -- <cite>[Refactoring.Guru][1]</cite>

# Cons

> - It might be difficult to provide a common interface for classes whose functionality differs too much. In certain scenarios, you’d need to overgeneralize the component interface, making it harder to comprehend.
>   -- <cite>[Refactoring.Guru][1]</cite>

[1]: https://refactoring.guru/design-patterns/composite
