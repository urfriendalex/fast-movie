import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      move: false,
      visible: true,
      limit: false,
      mouseStartPosX: null,
      mouseStartPosY: null,
      mouseCurrPosX: null,
      mouseCurrPosY: null,
      posX: null,
      posY: null,
      k: 0.2,
      restX: 0,
      restY: 0,
      fx: 0,
      fy: 0,
      ax: 0,
      ay: 0,
      vx: 0.0,
      vy: 0.0,
      mass: 0.7,
      damping: 0.8
    };
    this.handleDown = this.handleDown.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.animate = this.animate.bind(this);
    this.updateCard = this.updateCard.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleButtonEvent = this.handleButtonEvent.bind(this);
    this.removeComp = this.removeComp.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
  }

  componentDidMount() {
    this.animate();
  }

  handleDown(e) {
    console.log("moved down");
    this.setState({
      move: true,
      active: true,
      mouseStartPosX: e.clientX,
      mouseStartPosY: e.clientY
    });
  }

  handleTouchStart(e) {
    e.persist();
    this.setState({
      move: true,
      active: true,
      mouseStartPosX: e.touches[0].screenX,
      mouseStartPosY: e.touches[0].screenY
    });
    console.log(this.state.mouseStartPosX);
  }

  handleMove(e) {
    console.log("mouse move " + e.clientX + " " + e.clientY);
    if (!this.state.limit) {
      if (this.state.move) {
        let mouseCurrPosX = e.clientX;
        let mouseCurrPosY = e.clientY;
        let posX = mouseCurrPosX - this.state.mouseStartPosX;
        let posY = mouseCurrPosY - this.state.mouseStartPosY;
        let height = window.innerHeight;
        let width = window.innerWidth;
        function map_range(value, low1, high1, low2, high2) {
          return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
        }
        let mouseRange = mouseCurrPosX;
        if (mouseRange < width / 2) {
          mouseRange = width - mouseRange;
        }
        let damping = map_range(
          mouseRange,
          width / 2,
          width - (width * 10) / 100,
          0.6,
          0.8
        );

        this.setState({
          posX,
          posY,
          damping,
          mouseCurrPosX,
          mouseCurrPosY
        });

        if (mouseCurrPosX > width - (width * 20) / 100) {
          let restX, restY;
          if (mouseCurrPosX > width / 2) {
            restX = this.state.posX * 5;
          } else {
            restX = -this.state.posX * 5;
          }
          if (mouseCurrPosY > height / 2) {
            restY = this.state.posY * 5;
          } else {
            restY = this.state.posY * 5;
          }
          let limit = true;
          let move = false;
          let damping = 0.06;
          this.setState(
            {
              restX,
              restY,
              limit,
              move,
              damping
            },
            () => {
              setTimeout(() => {
                window.cancelAnimationFrame(this.animate);
              }, 10);
            }
          );
        } else if (mouseCurrPosX < (width * 20) / 100) {
          let restX, restY;
          if (mouseCurrPosX > width / 2) {
            restX = -this.state.posX * 5;
          } else {
            restX = this.state.posX * 5;
          }
          if (mouseCurrPosY > height / 2) {
            restY = this.state.posY * 5;
          } else {
            restY = this.state.posY * 5;
          }
          let limit = true;
          let move = false;
          let damping = 0.06;
          this.setState({
            restX,
            restY,
            limit,
            move,
            damping
          });
        }
      }
    }
  }

  handleTouchMove(e) {
    e.persist();
    if (!this.state.limit) {
      if (this.state.move) {
        let mouseCurrPosX = e.touches[0].screenX;
        let mouseCurrPosY = e.touches[0].screenY;
        let posX = mouseCurrPosX - this.state.mouseStartPosX;
        let posY = mouseCurrPosY - this.state.mouseStartPosY;
        let height = window.innerHeight;
        let width = window.innerWidth;
        function map_range(value, low1, high1, low2, high2) {
          return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
        }
        let mouseRange = mouseCurrPosX;
        if (mouseRange < width / 2) {
          mouseRange = width - mouseRange;
        }
        let damping = map_range(
          mouseRange,
          width / 2,
          width - (width * 10) / 100,
          0.6,
          0.8
        );

        this.setState({
          posX,
          posY,
          damping,
          mouseCurrPosX,
          mouseCurrPosY
        });

        if (mouseCurrPosX > width - (width * 10) / 100) {
          let restX, restY;
          if (mouseCurrPosX > width / 2) {
            restX = this.state.posX * 5;
          } else {
            restX = -this.state.posX * 5;
          }
          if (mouseCurrPosY > height / 2) {
            restY = this.state.posY * 5;
          } else {
            restY = this.state.posY * 5;
          }
          let limit = true;
          let move = false;
          let damping = 0.08;
          this.setState(
            {
              restX,
              restY,
              limit,
              move,
              damping
            },
            () => {
              setTimeout(() => {
                window.cancelAnimationFrame(this.animate);
              }, 10);
            }
          );
        } else if (mouseCurrPosX < (width * 10) / 100) {
          let restX, restY;
          if (mouseCurrPosX > width / 2) {
            restX = -this.state.posX * 5;
          } else {
            restX = this.state.posX * 5;
          }
          if (mouseCurrPosY > height / 2) {
            restY = this.state.posY * 5;
          } else {
            restY = this.state.posY * 5;
          }
          let limit = true;
          let move = false;
          let damping = 0.08;
          this.setState({
            restX,
            restY,
            limit,
            move,
            damping
          });
        }
      }
    }
  }

  handleUp() {
    console.log("mouse up");
    this.setState({
      move: false
    });
  }

  handleTouchEnd() {
    this.setState({
      move: false
    });
  }

  updateCard() {
    if (!this.state.move) {
      this.setState(
        {
          fx: -this.state.k * (this.state.posX - this.state.restX),
          fy: -this.state.k * (this.state.posY - this.state.restY)
        },
        () => {
          this.setState(
            {
              ax: this.state.fx / this.state.mass,
              ay: this.state.fy / this.state.mass
            },
            () => {
              this.setState(
                {
                  vx: this.state.damping * (this.state.vx + this.state.ax),
                  vy: this.state.damping * (this.state.vy + this.state.ay)
                },
                () => {
                  this.setState({
                    posX: this.state.posX + this.state.vx,
                    posY: this.state.posY + this.state.vy
                  });
                }
              );
            }
          );
        }
      );
    }
  }

  animate() {
    let el = document.getElementById("card" + this.props.no);
    if (
      this.state.posX > document.body.clientWidth - 400 ||
      this.state.posX < -document.body.clientWidth + 400
    ) {
      cancelAnimationFrame(this.animate);
      this.removeComp();
    } else {
      requestAnimationFrame(this.animate);
    }
    if (this.state.active) {
      el.style.transform =
        "translate(" +
        this.state.posX +
        "px" +
        "," +
        this.state.posY +
        "px) rotate(" +
        this.state.posX / 9 +
        "deg) perspective(800px)";
      this.updateCard();
    }
  }

  removeComp(){
    let el = document.getElementById("card" + this.props.no);
    el.parentElement.removeChild(el);
    this.setState({
        visible: false,
        active: false
    })
  }

  handleButtonEvent(love) {
    console.log(document.body.clientWidth);
    let width = window.innerWidth;
    let maxX = width - (width * 20) / 100;
    let  moveOutWidth = love ? maxX: -document.body.clientWidth + 400;
    this.setState({
      visible: false
    })
    console.log(this.state.visible);
    this.mouseDown();
    this.mouseMove(0, moveOutWidth, love);
    this.handleUp(new MouseEvent("mouseup", {
      view: window,
    }));
  }

mouseDown() {
  let ev = new MouseEvent("mousedown", {
    view: window,
});
  this.handleDown(ev);
}

 mouseMove(coordX, maxX, love) {
  love ? coordX +=20 : coordX -=20;
  let ev = new MouseEvent("mousemove", {
      view: window,
      clientX: coordX,
      clientY: 450
  });
  this.handleMove(ev);
  if (love ? coordX < maxX : coordX > maxX) {
    setTimeout(this.mouseMove(coordX, maxX, love),100);
  }
}

  render() {
    return (
      <div
        id={"card" + this.props.no}
        className={"card color" + this.props.no + (this.state.move ? " moving" : "")}
        onMouseDown={this.handleDown}
        onMouseMove={this.handleMove}
        onMouseUp={this.handleUp}
        onMouseLeave={this.handleUp}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <div className="text">DRAG THE CARD LEFT OR RIGHT</div>
      </div>
         );
  }
}

export default Card;
