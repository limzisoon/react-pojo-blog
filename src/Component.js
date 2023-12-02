const Component = () => {
    const title = 'welcome to the new blog';
    const likes = 50;
    const person = { name:"yoshi", age:40};
    const google = 'https://google.com';

      return (
    <div className="App">
      <header className="content">
        <h1>{title}</h1>
        <p>liked {likes} times</p>
        <p>{person.age}</p>
        <p>{10}</p>
        <p>{"hello ninja"}</p>
        <p>{ [1,2,3,4,5]}</p>
        <p>{Math.random() * 10}</p>
        <a href={google}>google website</a>
      </header>
    </div>
  );
}
 
export default Component;