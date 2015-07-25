#p5js sketchbook
This is a virtual machine that will serve a set of p5js sketches. Serving your sketches from this server will help you avoid many of the cross domain and browser security issues that may come from developing sketches locally. This virtual machine uses vagrant to mount a shared folder where you may develop your sketch js file in whatever IDE you like. As soon as you save you changes locally, you should be able to view them from your server

**Before you begin** you'll need to install Virtual Box, Vagrant, and if you're on Windows you may want to install Git or some kind of bash shell (I like to use Git Shell myself).

Clone this repo to a local directory. Once you've navigated there with your shell: 
```
$ vagrant up
```

If this is your first time then vagrant should download the machine image, the dependencies, and when it's finished, it will launch the sketch server.

To create a new sketch type 
```
$ ./new-sketch.sh
```

You'll be prompted to name your new sketch and then you'll find a new base folder ready for development.

To access your sketch you just need to navigate to 
```
http://localhost:3000/[the name of your sketch]
```
This should show the latest state of your sketch. Reloading your browser should show your updates sketch.

To load a navigatable layout of your entire sketch collecton, just navigate to
```
http://localhost:3000
```

