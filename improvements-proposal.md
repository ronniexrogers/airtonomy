Right now the data for the posts is coming from a json file. What changes would you have to make to the application if it came from an API? In what type of hook should you use to fetch the data and why? What other considerations would you have to make?

    If I were to receive the blog posts using an API call, I'd do as follows:
        Use the UseState hook to create a blogPosts variable to store the blog posts
        Use the UseEffect hook to make my api call when the component mounts or updates
        Create an asynchronous function inside of the use effect that would make my fetch call to the api then update my blogPosts variable.
        Something else to consider, would be to have a isLoading variable that would update during the API request.  I'd use this variable to have a spinner icon or loading text while the call is made.


Part of this application uses the package nanoid to generate keys. What issue would this cause for generating keys in React?

    The issue I can see using an external package like nanoid to generate the keys for list items is that they would not be consistent across renders of the component.  How it stands now, each item would generate a new key upon render.