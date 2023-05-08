# Milhas
React router, control specific path conditions to render.


```html
<Router>
    <Path as="/" absolute>              //The path need to have the same exactly string
        <Homepage />
    </Path>
    
    <Path as="/projects/$id">           // Render with params 
        <Projects/>
        <Anchor href="/chatrgb">        // Similar to <a> tag, but maintein the page without reloads.
            Click me!
        </Anchor>  
    </Path>
    
    <Path as="/info" absolute>  
        <Redirect href="/other/path"/>  // Auto redirects at render.
    </Path>
    
    <E404>
        <ErrPage></ErrPage err="404">   // If anyother not can be reached, render this.
        <Button onClick={()=>{
            navigate()
        }}/>
    </E404>
</Router>
```


JS api

```
  myButton.onClick = ()=> 
        navigate('/home');              // Jump to other path maintening the page without reloads.
    }
```
