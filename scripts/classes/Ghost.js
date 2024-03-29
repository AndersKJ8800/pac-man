class Ghost extends Entity
{
    constructor(color, posX, posY, dir, timeToRelease)
    {
      super();
      this.color = color;
      this.posX = posX;
      this.posY = posY;
      this.prevPosX = 0;
      this.prevPosY = 0;
      this.dir = dir;
      this.timeToRelease = timeToRelease;
      this.retrieving = false;
      this.justEaten = false;
      this.surroundingSquareTypes = "yo";
      this.surroundingSquareTypesPrevFrame = "yay";
      this.distanceFromPlayer = sqrt(pow(player.squareX-this.squareX, 2) + pow(player.squareY-this.squareY, 2));
      this.distFromSquareUpToTarget = 0;
      this.distFromSquareRightToTarget = 0;
      this.distFromSquareDownToTarget = 0;
      this.distFromSquareLeftToTarget = 0;
      this.released = false;
    }

    update()
    {
      if (this.retrieving === true)
      {
        this.velocity = 1.5;
      }
      else if (lethalNomming)
      {
        this.velocity = 0.6;
      }
      else
      {
        this.velocity = 1;
      }
      this.updateSquares();
      this.surroundingSquareTypes = this.squareUp.type+this.squareRight.type+this.squareDown.type+this.squareLeft.type;
      this.distanceFromPlayer = sqrt(pow(player.squareX-this.squareX, 2) + pow(player.squareY-this.squareY, 2));
      this.updateTarget();


      this.prevPosX = this.posX;
      this.prevPosY = this.posY;

      if ((ceil(this.posX) - 4) / 8 % 1 == 0 && (ceil(this.posY) - 4) / 8 % 1 == 0 && (
        //virkelig uoptimeret og burde ikke bruges
        (this.squareCurrent.posX === 1 && this.squareCurrent.posY === 1) ||
        (this.squareCurrent.posX === 6 && this.squareCurrent.posY === 1) ||
        (this.squareCurrent.posX === 12 && this.squareCurrent.posY === 1) ||
        (this.squareCurrent.posX === 15 && this.squareCurrent.posY === 1) ||
        (this.squareCurrent.posX === 21 && this.squareCurrent.posY === 1) ||
        (this.squareCurrent.posX === 28 && this.squareCurrent.posY === 1) ||
        (this.squareCurrent.posX === 6 && this.squareCurrent.posY === 5) ||
        (this.squareCurrent.posX === 12 && this.squareCurrent.posY === 5) ||
        (this.squareCurrent.posX === 15 && this.squareCurrent.posY === 5) ||
        (this.squareCurrent.posX === 21 && this.squareCurrent.posY === 5) ||
        (this.squareCurrent.posX === 28 && this.squareCurrent.posY === 5) ||
        (this.squareCurrent.posX === 1 && this.squareCurrent.posY === 8) ||
        (this.squareCurrent.posX === 6 && this.squareCurrent.posY === 8) ||
        (this.squareCurrent.posX === 9 && this.squareCurrent.posY === 8) ||
        (this.squareCurrent.posX === 12 && this.squareCurrent.posY === 8) ||
        (this.squareCurrent.posX === 15 && this.squareCurrent.posY === 8) ||
        (this.squareCurrent.posX === 18 && this.squareCurrent.posY === 8) ||
        (this.squareCurrent.posX === 21 && this.squareCurrent.posY === 8) ||
        (this.squareCurrent.posX === 26 && this.squareCurrent.posY === 8) ||
        (this.squareCurrent.posX === 9 && this.squareCurrent.posY === 11) ||
        (this.squareCurrent.posX === 12 && this.squareCurrent.posY === 11) ||
        (this.squareCurrent.posX === 15 && this.squareCurrent.posY === 11) ||
        (this.squareCurrent.posX === 18 && this.squareCurrent.posY === 11) ||
        (this.squareCurrent.posX === 6 && this.squareCurrent.posY === 14) ||
        (this.squareCurrent.posX === 9 && this.squareCurrent.posY === 14) ||
        (this.squareCurrent.posX === 18 && this.squareCurrent.posY === 14) ||
        (this.squareCurrent.posX === 21 && this.squareCurrent.posY === 14) ||
        (this.squareCurrent.posX === 6 && this.squareCurrent.posY === 17) ||
        (this.squareCurrent.posX === 9 && this.squareCurrent.posY === 17) ||
        (this.squareCurrent.posX === 18 && this.squareCurrent.posY === 17) ||
        (this.squareCurrent.posX === 21 && this.squareCurrent.posY === 17) ||
        (this.squareCurrent.posX === 1 && this.squareCurrent.posY === 20) ||
        (this.squareCurrent.posX === 6 && this.squareCurrent.posY === 20) ||
        (this.squareCurrent.posX === 9 && this.squareCurrent.posY === 20) ||
        (this.squareCurrent.posX === 12 && this.squareCurrent.posY === 20) ||
        (this.squareCurrent.posX === 15 && this.squareCurrent.posY === 20) ||
        (this.squareCurrent.posX === 18 && this.squareCurrent.posY === 20) ||
        (this.squareCurrent.posX === 21 && this.squareCurrent.posY === 20) ||
        (this.squareCurrent.posX === 26 && this.squareCurrent.posY === 20) ||
        (this.squareCurrent.posX === 1 && this.squareCurrent.posY === 23) ||
        (this.squareCurrent.posX === 3 && this.squareCurrent.posY === 23) ||
        (this.squareCurrent.posX === 6 && this.squareCurrent.posY === 23) ||
        (this.squareCurrent.posX === 9 && this.squareCurrent.posY === 23) ||
        (this.squareCurrent.posX === 12 && this.squareCurrent.posY === 23) ||
        (this.squareCurrent.posX === 15 && this.squareCurrent.posY === 23) ||
        (this.squareCurrent.posX === 18 && this.squareCurrent.posY === 23) ||
        (this.squareCurrent.posX === 21 && this.squareCurrent.posY === 23) ||
        (this.squareCurrent.posX === 24 && this.squareCurrent.posY === 23) ||
        (this.squareCurrent.posX === 26 && this.squareCurrent.posY === 23) ||
        (this.squareCurrent.posX === 1 && this.squareCurrent.posY === 26) ||
        (this.squareCurrent.posX === 3 && this.squareCurrent.posY === 26) ||
        (this.squareCurrent.posX === 6 && this.squareCurrent.posY === 26) ||
        (this.squareCurrent.posX === 9 && this.squareCurrent.posY === 26) ||
        (this.squareCurrent.posX === 12 && this.squareCurrent.posY === 26) ||
        (this.squareCurrent.posX === 15 && this.squareCurrent.posY === 26) ||
        (this.squareCurrent.posX === 18 && this.squareCurrent.posY === 26) ||
        (this.squareCurrent.posX === 21 && this.squareCurrent.posY === 26) ||
        (this.squareCurrent.posX === 24 && this.squareCurrent.posY === 26) ||
        (this.squareCurrent.posX === 26 && this.squareCurrent.posY === 26) ||
        (this.squareCurrent.posX === 1 && this.squareCurrent.posY === 29) ||
        (this.squareCurrent.posX === 12 && this.squareCurrent.posY === 29) ||
        (this.squareCurrent.posX === 15 && this.squareCurrent.posY === 29) ||
        (this.squareCurrent.posX === 26 && this.squareCurrent.posY === 29)
      ))
      {
        this.updateDirection();
      }
      this.squareX = ceil(this.posX/8);
      this.squareY = ceil(this.posY/8);
    }

    updateTarget()
    {
      if (ghostModeIsChase || this.retrieving === true)
      {
        if (this.color === "red")
        {
          this.targetX = player.squareX;
          this.targetY = player.squareY;
        }
        else if (this.color === "cyan")
        {
          this.targetX = player.squareX + (player.squareX - ghost[0].squareX +1);
          this.targetY = player.squareY + (player.squareY - ghost[0].squareY +1);
        }
        else if (this.color === "pink")
        {
          this.targetX = player.squareX;
          this.targetY = player.squareY;
          switch (player.dir)
          {
            case 1:
              this.targetY -= 4;
              break;
            case 2:
              this.targetX += 4;
              break;
            case 3:
              this.targetY += 4;
              break;
            case 4:
              this.targetX -= 4;
              break;
          }
        }
        else if (this.color === "orange")
        {
          if (this.distanceFromPlayer > 8)
          {
            this.targetX = player.squareX;
            this.targetY = player.squareY;
          }
          else
          {
            this.targetX = 0;
            this.targetY = 30;
          }
        }
      }

      else
      {
        if (this.color === "red")
        {
          this.targetX = 27;
          this.targetY = 0;
        }
        else if (this.color === "cyan")
        {
          this.targetX = 27;
          this.targetY = 30;
        }
        else if (this.color === "pink")
        {
          this.targetX = 0;
          this.targetY = 0;
        }
        else if (this.color === "orange")
        {
          this.targetX = 0;
          this.targetY = 30;
        }
      }

      if (this.retrieving)
      {
        this.targetX = 13.5;
        this.targetY = 11;
        if (ceil(this.posX) === 108 && this.squareCurrent.posY === 11)
        {
          this.retrieving = false;
        }
      }

      if (this.released)
      {
        this.move();
      }
      else
      {
        if (this.timeToRelease > 0)
        {
          if (this.posY < 112)
          {
            this.dir = 3;
          }
          if (this.posY > 120)
          {
            this.dir = 1;
          }
          this.timeToRelease -= deltaTime;
        }
        else
        {
          if (ceil(this.posX) > 112)
          {
            this.dir = 4;
          }
          else if (ceil(this.posX) < 112)
          {
            this.dir = 2;
          }
          else
          {
            this.dir = 1;
          }
        }
        if (this.dir === 1 || this.dir === 3)
        {
          this.posY += baseVelocity * (this.dir - 2) * 0.5;
        }
        else
        {
          this.posX += baseVelocity * -(this.dir - 3) * 0.5;
        }
        if (ceil(this.posY) === 92)
        {
          this.released = true;
          this.dir = 4;
        }
      }

      if (this.prevPosX === this.posX && this.prevPosY === this.posY)
      {
        this.updateDirection();
      }




    }

    updateDirection()
    {
      let squareDistancesToTarget = [999999,999999,999999,999999];
      if (this.squareUp.type !== "wall" && this.dir !== 3)
      {
        squareDistancesToTarget[0] = sqrt(pow(this.targetX-this.squareCurrent.posX, 2) + pow(this.targetY-(this.squareCurrent.posY-1), 2));
      }
      if (this.squareRight.type !== "wall" && this.dir !== 4)
      {
        squareDistancesToTarget[1] = sqrt(pow(this.targetX-(this.squareCurrent.posX+1), 2) + pow(this.targetY-this.squareCurrent.posY, 2)) + 0.01;
      }
      if (this.squareDown.type !== "wall" && this.dir !== 1)
      {
        squareDistancesToTarget[2] = sqrt(pow(this.targetX-this.squareCurrent.posX, 2) + pow(this.targetY-(this.squareCurrent.posY+1), 2)) + 0.02;
      }
      if (this.squareLeft.type !== "wall" && this.dir !== 2)
      {
        squareDistancesToTarget[3] = sqrt(pow(this.targetX-(this.squareCurrent.posX-1), 2) + pow(this.targetY-this.squareCurrent.posY, 2)) + 0.03;
      }

      if (squareDistancesToTarget[0] === Math.min(squareDistancesToTarget[0], squareDistancesToTarget[1], squareDistancesToTarget[2], squareDistancesToTarget[3]))
      {
        this.dir = 1;
      }
      if (squareDistancesToTarget[1] === Math.min(squareDistancesToTarget[0], squareDistancesToTarget[1], squareDistancesToTarget[2], squareDistancesToTarget[3]))
      {
        this.dir = 2;
      }
      if (squareDistancesToTarget[2] === Math.min(squareDistancesToTarget[0], squareDistancesToTarget[1], squareDistancesToTarget[2], squareDistancesToTarget[3]))
      {
        this.dir = 3;
      }
      if (squareDistancesToTarget[3] === Math.min(squareDistancesToTarget[0], squareDistancesToTarget[1], squareDistancesToTarget[2], squareDistancesToTarget[3]))
      {
        this.dir = 4;
      }

    }

    /*
    this.distFromSquareUpToTarget =
    this.distFromSquareRightToTarget =
    this.distFromSquareDownToTarget =
    this.distFromSquareLeftToTarget =
    */

    /*
    updateDirection()
    {
      let array = [];
      if (this.squareUp.type !== "wall")
      {
        array[array.length] = 1;
      }
      if (this.squareRight.type !== "wall")
      {
        array[array.length] = 2;
      }
      if (this.squareDown.type !== "wall")
      {
        array[array.length] = 3;
      }
      if (this.squareLeft.type !== "wall")
      {
        array[array.length] = 4;
      }

      this.dir = random(array);
      array = [];
    }
    */

    display()
    {
      if (currentScene !== "game over")
      {
        translate(ceil(this.posX - 7), ceil(this.posY - 7));
        if (!this.retrieving)
        {
          if (lethalNomming)
          {
            //skifter mellem blå og hvid hvert 1/5 sek, hvis timeren er under to sek
            if (lethalNommingTimer > 2000 || !(abs(ceil(((lethalNommingTimer) / 200))) % 2))
            {
              tint(33,33,255);
              image(animatedSprite.ghostBody, 0, 0);
              noTint();
            }
            else
            {
              tint(222,222,255);
              image(animatedSprite.ghostBody, 0, 0);
              tint(255,0,0);
            }
            image(sprite.ghostFaceBlue, 0, 0);
            noTint();
          }
          else
          {
            switch (this.color)
            {
              case "red":
              tint(255,0,0);
              break;
              case "orange":
              tint(255,184,81);
              break;
              case "cyan":
              tint(0,255,255);
              break;
              case "pink":
              tint(255,184,255);
              break;
            }
            image(animatedSprite.ghostBody, 0, 0);
            noTint();
            image(sprite.ghostEyes[this.dir-1], 0, 0);
          }
        }
        else
        {
          image(sprite.ghostEyes[this.dir-1], 0, 0);
        }
        translate(-ceil(this.posX - 7), -ceil(this.posY - 7));

        if (displayGhostTargets)
        {
          switch (this.color)
          {
            case "red":
            tint(255,0,0);
            break;
            case "orange":
            tint(255,184,81);
            break;
            case "cyan":
            tint(0,255,255);
            break;
            case "pink":
            tint(255,184,255);
            break;
          }
          image(symbol.letter[23], this.targetX*8, this.targetY*8,8,8);
          noTint();
        }

      }
    }

}
