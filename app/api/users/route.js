export async function GET(request) {
    // handle get requests for api/users
    // retrieve users from the database or any data source
    const users = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Doe" },
        { id: 3, name: "John Smith" },
    ]

    // send the users as a response
    return new Response(JSON.stringify(users))
}