screen is a terminal multiplexer that allows you to manage multiple terminal sessions within a single terminal window or SSH session. It was created in the late 1980s and has been a popular tool for remote administration, managing long-running processes, and working with multiple terminals simultaneously.
- To start a new screen session:
```
screen
```
- To create a new window within the session:
```
Ctrl-a c
```
- To switch between windows:
```
Ctrl-a n (next window)
Ctrl-a p (previous window)
Ctrl-a [0-9] (numbered window)
```
- To split the current window vertically:
```
Ctrl-a S
```
- To detach from the session (while keeping it running):
```
Ctrl-a d
```
- To reattach to a detached session:
```
screen -r
```
- To exit a window or session:
```
exit
```
