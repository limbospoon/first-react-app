function Message()
{
    const name = 'Joe';
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1>Fuck you</h1>
}

export default Message;