const NotFound = () => {
  return (
    <div>
      <h1>Oops! </h1>
      <h2>We got ourselves a 404 over here!</h2>
      <p>
        How about a game of Snake while you're at it..?
        <br />
        Click on the game area. Use arrow keys to move the snake.
      </p>
      <br />
      <center>
        <iframe width="580" height="400" src="../snake/" />
      </center>
    </div>
  );
};
export default NotFound;
