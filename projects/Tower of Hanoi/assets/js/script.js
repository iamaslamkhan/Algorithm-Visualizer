numberOfDiscs = 6;
      
      $(function() {
        var spinner = $("#spinner").spinner();
        $("#spinner").spinner({value: 3, min: 1, max: numberOfDiscs});

        $("#spinner").spinner("value", 3);

        $("#disable").click(function() {
          if (spinner.spinner("option", "disabled")) {
            spinner.spinner("enable");
          } else {
            spinner.spinner("disable");
          }
        });
        $("#destroy").click(function() {
          if (spinner.spinner("instance")) {
            spinner.spinner("destroy");
          } else {
            spinner.spinner();
          }
        });
        $("#getvalue").click(function() {
          jAlert(spinner.spinner("value"));
        });
        $("#setvalue").click(function() {
          spinner.spinner("value", 5);
        });

        $("button").button();
      });

      n = 3; // The number of discs
      color = [];
      color[0] = "crimson";
      color[1] = "cornflowerblue";
      color[2] = "beige";
      color[3] = "purple";
      color[4] = "aqua";
      color[5] = "darkorange";
      color[6] = "goldenrod";
      color[7] = "#37826C";

      number1 = 8;
      number2 = 7;
      answer = 15;
      result = true;

      steps = 7;
      animationSpeed = 500;
      slowAnimationSpeed = 1500;
      lineOffSet = 15;
      highLight = [];
      highLight[0] = new HighLight();
      highLight[0].top = 95;
      highLight[0].left = 62;
      highLight[0].width = 318;

      highLight[1] = new HighLight();
      highLight[1].top = 109;
      highLight[1].left = 60 + 20;
      highLight[1].width = 417;

      highLight[2] = new HighLight();
      highLight[2].top = 125;
      highLight[2].left = 60 + 20;
      highLight[2].width = 457;

      highLight[3] = new HighLight();
      highLight[3].top = 169;
      highLight[3].left = 60 + 20;
      highLight[3].width = 304;

      highLight[4] = new HighLight();
      highLight[4].top = 198;
      highLight[4].left = 60 + 20;
      highLight[4].width = 385;
      highLight[4].height = 25;

      highLight[5] = new HighLight();
      highLight[5].top = 243;
      highLight[5].left = 60 + 20;
      highLight[5].width = 232;

      highLight[6] = new HighLight();
      highLight[6].top = 273;
      highLight[6].left = 60 + 20;
      highLight[6].width = 435;
      highLight[6].height = 38;

      highLight[7] = new HighLight();
      highLight[7].top = 314;
      highLight[7].width = 6;
      highLight[7].left = 62;

      explanation = [];
      explanation[0] = new Explanation();
      explanation[0].innerHTML = "The program starts the execution from the main method.";
      explanation[0].top = 95;
      explanation[0].left = 548;

      explanation[1] = new Explanation();
      explanation[1].innerHTML = "The statement generates a random number " + number1 + " and assigns it to variable number1.";
      explanation[1].top = 107;
      explanation[1].left = 550;

      explanation[2] = new Explanation();
      explanation[2].innerHTML = "The statement assigns a random integer to number2.";
      explanation[2].top = 137;
      explanation[2].left = 570;

      explanation[3] = new Explanation();
      explanation[3].innerHTML = "The statement creates an object for performing console input and assigns the object to the reference variable named input.";
      explanation[3].top = 157;
      explanation[3].left = 430;
      explanation[3].width = 470;

      explanation[4] = new Explanation();
      explanation[4].innerHTML = "The statement displays a prompting message for the user input.";
      explanation[4].top = 190;
      explanation[4].left = 480;
      explanation[4].width = 160;

      explanation[5] = new Explanation();
      explanation[5].innerHTML = "The statement receives an input from the user.";
      explanation[5].top = 225;
      explanation[5].left = 325;
      explanation[5].width = 205;

      explanation[6] = new Explanation();
      explanation[6].innerHTML = "The statement displays the result.";
      explanation[6].top = 257;
      explanation[6].left = 325;
      explanation[6].width = 205;

      explanation[7] = new Explanation();
      explanation[7].innerHTML = "The main method exits. The program is finished.";
      explanation[7].top = 320;
      explanation[7].left = 128;

      commandPrompt = [];
      commandPrompt[0] = new CommandPrompt();
      commandPrompt[0].innerHTML = "";
      commandPrompt[0].top = 95;
      commandPrompt[0].left = 700;
      commandPrompt[0].isVisible = false;
      commandPrompt[1] = new CommandPrompt();
      commandPrompt[1].isVisible = false;
      commandPrompt[2] = new CommandPrompt();
      commandPrompt[2].isVisible = false;
      commandPrompt[2].innerHTML = "Enter a number for radius: ";
      commandPrompt[2].top = 161;
      commandPrompt[2].left = 640;

      commandPrompt[3] = new CommandPrompt();
      commandPrompt[3].isVisible = false;

      commandPrompt[4] = new CommandPrompt();
      commandPrompt[4].isVisible = true;
      commandPrompt[4].innerHTML = "What is " + number1 + " + " + number2 + "? ";
      commandPrompt[4].top = 200;
      commandPrompt[4].left = 640;

      commandPrompt[5] = new CommandPrompt();
      commandPrompt[5].isVisible = true;
      commandPrompt[5].innerHTML = commandPrompt[4].innerHTML + answer;
      commandPrompt[5].top = 232;
      commandPrompt[5].left = 550;

      commandPrompt[6] = new CommandPrompt();
      commandPrompt[6].isVisible = true;
      commandPrompt[6].innerHTML = commandPrompt[5].innerHTML + "\n" + number1 + " + " + number2 + " = " + answer + " is " + result;
      commandPrompt[6].top = 232;
      commandPrompt[6].left = 550;

      commandPrompt[7] = new CommandPrompt();
      commandPrompt[7].isVisible = false;
      commandPrompt[7].innerHTML = commandPrompt[6].innerHTML + "";
      commandPrompt[7].top = 329;
      commandPrompt[7].left = 300;

      currentLine = 0;

      function init() {
        posLoc = getElementPos(document.getElementById('program'));
        x = posLoc.x;
        y = posLoc.y;

        $("#status").hide();
        $("#v1").css("top", y + 90).css("left", x + 115 - 3 / 2);
        $("#v2").css("top", y + 90).css("left", x + 305 - 3 / 2);
        $("#v3").css("top", y + 90).css("left", x + 495 - 3 / 2);
        $("#h1").css("top", y + 220).css("left", x + 40);
        $("#h2").css("top", y + 220).css("left", x + 230);
        $("#h3").css("top", y + 220).css("left", x + 420);
        $("#t1").css("top", y + 230).css("left", x + 90);
        $("#t2").css("top", y + 230).css("left", x + 280);
        $("#t3").css("top", y + 230).css("left", x + 470);

        offset = n * 20;
        for (var i = 1; i <= n; i++) {
          $("#d" + i).show();
          $("#d" + i).css("top", y + 220 - (n + 1 - i) * 20)
                  .css("background-color", color[i])
                  .css("left", x + 40 + (8 - i) * 7)
                  .css("width", 150 - (8 - i) * 14);
        }

        for (var i = 7; i > n; i--) {
          $("#d" + i).hide(); // css("display", "none");
        }
      }