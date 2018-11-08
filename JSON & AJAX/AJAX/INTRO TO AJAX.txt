### INTRODUCTION TO AJAX

AJAX is an acronym for **Asynchronous JavaScript and XML**. It is a group of inter-related technologies like JavaScript, DOM, XML, HTML/XHTML, CSS, XMLHttpRequest etc.

AJAX allows you to send and receive data asynchronously without reloading the web page. So it is fast.

AJAX allows you to send only important information to the server not the entire page. It makes your application interactive and faster.

**Where it is used?**
There are too many web applications running on the web that are using ajax technology like gmail, facebook,twitter, google map, youtube etc.


### AJAX Technologies
As describe earlier, ajax is not a technology but group of inter-related technologies. AJAX technologies includes:
- HTML/XHTML and CSS
- DOM
- XML or JSON
- XMLHttpRequest
- JavaScript


**HTML/XHTML and CSS**
These technologies are used for displaying content and style. It is mainly used for presentation.

**DOM**
It is used for dynamic display and interaction with data.

**XML or JSON**
For carrying data to and from server. JSON (Javascript Object Notation) is like XML but short and faster than XML.

**XMLHttpRequest**
For asynchronous communication between client and server. 

**JavaScript**
It is used to bring above technologies together. Independently, it is used mainly for client-side validation.


### Understanding XMLHttpRequest

An object of XMLHttpRequest is used for asynchronous communication between client and server.

It performs following operations:
- Sends data from the client in the background.
- Receives the data from the server.
- Updates the web page without reloading it.


**Properties of XMLHttpRequest object**

The common properties of XMLHttpRequest object are as follows:

Property | Description
-- | --
onReadyStateChange | It is called whenever readystate attribute changes. It must not be used with synchronous requests.
readyState | represents the state of the request. It ranges from 0 to 4.0	UNOPENED	open() is not called.1	OPENED	open is called but send() is not called.2	HEADERS_RECEIVED	send() is called, and headers and status are available.3	LOADING	Downloading data; responseText holds the data.4	DONE	The operation is completed fully.
reponseText | returns response as text.
responseXML | returns response as XML


**Methods of XMLHttpRequest object**

The important methods of XMLHttpRequest object are as follows:

Method | Description
-- | --
void open(method, URL) | opens the request specifying get or post method and url.
void open(method, URL, async) | same as above but specifies asynchronous or not.
void open(method, URL, async, username, password) | same as above but specifies username and password.
void send() | sends get request.
void send(string) | send post request.
setRequestHeader(header,value) | it adds request headers.


### How AJAX works?

AJAX communicates with the server using XMLHttpRequest object. Let's try to understand the flow of ajax or how ajax works.
- User sends a request from the UI and a javascript call goes to XMLHttpRequest object.
- HTTP Request is sent to the server by XMLHttpRequest object.
- Server interacts with the database using JSP, PHP, Servlet, ASP.net etc.
- Data is retrieved.
- Server sends XML data or JSON data to the XMLHttpRequest callback function.
- HTML and CSS data is displayed on the browser.

