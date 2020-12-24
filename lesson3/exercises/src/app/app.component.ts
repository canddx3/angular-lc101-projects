import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  takeOffEnabled: boolean = true;

handleTakeOff() {
  let result = window.confirm('are you sure the shuttle is ready for takeoff?');
  if (result) {
    this.color = 'blue';
    this.height = 10000;
    this.width = 0;
    this.message = 'Shuttle in flight.';
    this.takeOffEnabled = false
  }
}

handleLand(rocketImage) {
  let result = window.confirm('Shuttle landing');
  if (result) {
    this.color = 'purple';
    this.height = 0;
    this.width = 0;
    this.message = 'Shuttle landed';
    this.takeOffEnabled = true;
    rocketImage.style.left = '0px';
    rocketImage.style.bottom = '0px';
  }
}

handleAbort(rocketImage) {
  let result = window.confirm('abort mission');
  if (result) {
    this.color = 'red';
    this.height = 0;
    this.width = 0;
    this.message = 'mission aborted';
    this.takeOffEnabled = true;
    rocketImage.style.left = '0px'
    rocketImage.style.bottom = '0px';
  }
}

handleEdge(rocketImage) {
  if (rocketImage.style.left < '0px' || rocketImage.style.left > '100px' || rocketImage.style.bottom < '0px' || rocketImage.style.bottom > '320px' ) {
    this.color = 'orange';
  }
}

moveRocket(rocketImage, direction) {
  if (direction === 'right') {
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
    this.handleEdge(rocketImage);
  } else if 
    (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
  } else if
    (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
  } else if
    (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
  }
}
