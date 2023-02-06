window.addEventListener('load', function(){
    const canvas = document.getElementById('canvasGameArea');
    const ctx = canvas.getContext('2d');
    canvas.width = 640; // Commodore 64 resolution is 320x200 -> double that
    canvas.height = 400;
    const GRIDSIZE = 16;     // c64 characters are 8x8. -> double that    
    const width = canvas.width / GRIDSIZE;   // same as c64 grid (40x25)
    const height = canvas.height / GRIDSIZE;
    const DIRECTION = {STOP:0, UP:38, RIGHT:39, DOWN:40, LEFT: 37}; // arrow key keycodes 
    document.addEventListener("keydown", keyPress);
    let highscore = 0;
    let gameover = false;

    // petscii character bitmaps (8x8) as strings    =)
    const petscii = {
        " ": "0000000000000000000000000000000000000000000000000000000000000000",        "@": "0011110001100110011011100110111001100000011000100011110000000000",
        "+": "0000000000011000000110000111111000011000000110000000000000000000",        "-": "0000000000000000000000000111111000000000000000000000000000000000",
        "*": "0000000001100110001111001111111100111100011001100000000000000000",        "=": "0000000000000000011111100000000001111110000000000000000000000000",
        ".": "0000000000000000000000000000000000000000000110000001100000000000",        ",": "0000000000000000000000000000000000000000000110000001100000110000",
        ":": "0000000000000000000110000000000000000000000110000000000000000000",        ";": "0000000000000000000110000000000000000000000110000001100000110000",
        "#": "0110011001100110111111110110011011111111011001100110011000000000",        "&": "0011110001100110001111000011100001100111011001100011111100000000",

        "0": "0011110001100110011011100111011001100110011001100011110000000000",        "1": "0001100000011000001110000001100000011000000110000111111000000000",
        "2": "0011110001100110000001100000110000110000011000000111111000000000",        "3": "0011110001100110000001100001110000000110011001100011110000000000",
        "4": "0000011000001110000111100110011001111111000001100000011000000000",        "5": "0111111001100000011111000000011000000110011001100011110000000000",
        "6": "0011110001100110011000000111110001100110011001100011110000000000",        "7": "0111111001100110000011000001100000011000000110000001100000000000",
        "8": "0011110001100110011001100011110001100110011001100011110000000000",        "9": "0011110001100110011001100011111000000110011001100011110000000000",

        "a": "0000000000000000001111000000011000111110011001100011111000000000",        "b": "0000000001100000011000000111110001100110011001100111110000000000",
        "c": "0000000000000000001111000110000001100000011000000011110000000000",        "d": "0000000000000110000001100011111001100110011001100011111000000000",
        "e": "0000000000000000001111000110011001111110011000000011110000000000",        "f": "0000000000001110000110000011111000011000000110000001100000000000",
        "g": "0000000000000000001111100110011001100110001111100000011001111100",        "h": "0000000001100000011000000111110001100110011001100110011000000000",
        "i": "0000000000011000000000000011100000011000000110000011110000000000",        "j": "0000000000001100000000000000110000001100000011000000110001111000",
        "k": "0000000001100000011000000110110001111000011011000110011000000000",        "l": "0000000000111000000110000001100000011000000110000011110000000000",
        "m": "0000000000000000011001100111111101111111011010110110001100000000",        "n": "0000000000000000011111000110011001100110011001100110011000000000",
        "o": "0000000000000000001111000110011001100110011001100011110000000000",        "p": "0000000000000000011111000110011001100110011111000110000001100000",
        "q": "0000000000000000001111100110011001100110001111100000011000000110",        "r": "0000000000000000011111000110011001100000011000000110000000000000",
        "s": "0000000000000000001111100110000000111100000001100111110000000000",        "t": "0000000000011000011111100001100000011000000110000000111000000000",
        "u": "0000000000000000011001100110011001100110011001100011111000000000",        "v": "0000000000000000011001100110011001100110001111000001100000000000",
        "w": "0000000000000000011000110110101101111111001111100011011000000000",        "x": "0000000000000000011001100011110000011000001111000110011000000000",
        "y": "0000000000000000011001100110011001100110001111100000110001111000",        "z": "0000000000000000011111100000110000011000001100000111111000000000",

        "A": "0001100000111100011001100111111001100110011001100110011000000000",
        "E": "0111111001100000011000000111100001100000011000000111111000000000",
        "J": "0001111000001100000011000000110000001100011011000011100000000000",
        "K": "0110011001101100011110000111000001111000011011000110011000000000",
        "N": "0110011001110110011111100111111001101110011001100110011000000000",
        "S": "0011110001100110011000000011110000000110011001100011110000000000"
    };
  
    /**
     * Pass arrow keys to snake. Handle game restart with space & enter. 
     */
    function keyPress(e) {
        // prevent default for arrow keys before checking gameover
        if(Object.values(DIRECTION).includes(e.keyCode) && e.keyCode !== DIRECTION.STOP) 
            e.preventDefault();
            
        if(gameover){
            if(e.keyCode === 32 || e.keyCode === 13)  // restart with space or enter
            {
                snake = new Snake();
                apple = newApple();
                gameover = false;
            }            
        }
        else if(Object.values(DIRECTION).includes(e.keyCode) && e.keyCode !== DIRECTION.STOP){
            snake.turn(e.keyCode);
        }
    }

    /**
     * Most of the stuff happens in this class. 
     */
    class Snake {
        constructor() {
            this.body = [{x: Math.floor(width/2), y:Math.floor(height/2)}]; // body[0] is the head
            this.dir = DIRECTION.STOP; 
            this.growth = 2; // snake will grow if >0. We start with length of three (1+2)
            this.score = 0;
        }
        // Moves the snake and grow if growth > 0 
        move(){
            // Check borders and add a xy-coordinates to the body array according to the direction of the snake.
            let newX = this.body[0].x; 
            let newY = this.body[0].y;

            if (this.dir === DIRECTION.UP)          newY = (newY > 2) ? newY-1 : height-1;
            else if (this.dir === DIRECTION.DOWN)   newY = (newY < height-1) ? newY+1 : 2;
            else if (this.dir === DIRECTION.RIGHT)  newX = (newX < width-1) ? newX+1 : 0;
            else if (this.dir === DIRECTION.LEFT)   newX = (newX > 0) ? newX-1: width-1;
            else return; // do nothing (for now)         
            
            // score decreases when you move
            if(this.score > 0) this.score--; 

            // check if we bite our own arse
            if(this.body.find(obj => obj.x === newX && obj.y === newY) !== undefined){
                this.dir = DIRECTION.STOP;
                if(this.score > highscore) highscore = this.score;
                gameover = true;
            }
            
            this.body.unshift({x: newX, y: newY});  // add to the front
            this.growth ? this.growth-- : this.body.pop();  // remove from back unless we are growing
        }
        // Change the direction of the snake. Prevent too easy 180 turns.
        turn(newDirection){    
            if(newDirection === DIRECTION.UP && this.dir !== DIRECTION.DOWN) this.dir = newDirection;
            if(newDirection === DIRECTION.DOWN && this.dir !== DIRECTION.UP) this.dir = newDirection;
            if(newDirection === DIRECTION.LEFT && this.dir !== DIRECTION.RIGHT) this.dir = newDirection;
            if(newDirection === DIRECTION.RIGHT && this.dir !== DIRECTION.LEFT) this.dir = newDirection; 
        }
        /**
         * Draw the snake. 
         */
        draw(ctx){
            ctx.fillStyle = "gray";
            this.body.forEach((part) => write("#", part.x, part.y));
            ctx.fillStyle = "white";
            write("#", this.body[0].x, this.body[0].y);
        }
    }
    
    /**
     * Write a string to x,y screen grid in petscii characters.
     * 
     * @param text string to write
     * @param xPos x coordinate in grid
     * @param yPos y coordinate in grid
     * @param invert default = false. Set true to draw inverted pixels.
     */
    function write(text, xPos, yPos, invert = false){
        let offset = 0; // this is kinda like the cursor when writing strings
        xPos *= GRIDSIZE;
        yPos *= GRIDSIZE;
        color = ctx.fillStyle; // Remember the color incase we do purple placeholders.

        for(let ch of text){
            if(ch in petscii){ 
                [...petscii[ch]].forEach((bit, indx) => {
                    if(bit===(invert ? "0" : "1")) 
                        ctx.fillRect(xPos + offset + (indx%8)*2, yPos + Math.floor(indx/8)*2, 2, 2)}
                );
            } 
            else{ // purple box placeholder for unknown characters
                ctx.fillStyle = "fuchsia";
                ctx.fillRect(xPos + offset, yPos, GRIDSIZE, GRIDSIZE);
                ctx.fillStyle = color;
            }
            offset += GRIDSIZE;
        }
    }

    /**
     * Find a random free spot for the apple.
     * @returns object with coordinates {x,y}
     */
    function newApple(){
        const emptyArea = [];
        for (let y = 2; y < height; y++){  // upmost two rows are reserved for info
            for (let x = 0; x < width; x++){
                if(snake.body.find(obj => obj.x === x && obj.y === y) !== undefined) continue;
                emptyArea.push({x,y});
            }
        }
        return emptyArea[Math.floor(Math.random() * emptyArea.length)];
    }
    const appleColor = ["brown", "orange","yellow","orange"]; // bling bling
    let appleColorIndex = 0;

    /**
     * update game state
     */
    function update(){
        snake.move();
        // check if snake ate apple
        if (snake.body[0].x === apple.x  && snake.body[0].y === apple.y ){
            snake.growth += (Math.floor(Math.random() * 7) + 3);  // grow random amount
            snake.score += snake.growth*20;  // get score based on growth 
            apple = newApple();
        }
    }

    /**
     * draw the game frame
     */
    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Scoreboard
        ctx.fillStyle = snake.dir === DIRECTION.STOP ? "black" : "white";
        write("              -= JSnake =-              ",0,0,true);
        write("score:" + String(snake.score).padStart(5,'0') + "                     hs:" + String(highscore).padStart(5,'0'), 0, 1, true);
        // snake
        snake.draw(ctx);      
        //apple
        ctx.fillStyle = appleColor[appleColorIndex++];
        if(appleColorIndex >= appleColor.length) appleColorIndex=0; 
        write("@", apple.x, apple.y);
        //game over popup
        if(gameover){
            ctx.fillStyle = "orange";
            write("             ",13,9,true)  // haha, might aswell just fill a rectangle.
            write("             ",13,10,true) // Suppose were using our "petscii-engine"
            write("             ",13,11,true)
            ctx.fillStyle = "black";
            write("  game over  ",13,10)
            write("             ",14,12,true)
            write(" ",26,10,true)
            write(" ",26,11,true)

        }
    }

    /**
     * Endless loop of update() and draw().
     */
    function gameloop() {
        update();
        draw();
        // this is pretty dumb, but good enough for this game
        setTimeout(function(){
            window.requestAnimationFrame(gameloop);     
        }, 75);
    }
    
    let snake = new Snake(); 
    let apple = newApple();
    window.requestAnimationFrame(gameloop);
});
