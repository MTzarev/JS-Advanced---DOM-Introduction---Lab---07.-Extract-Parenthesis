
    function extract(id) {
        let text=document.getElementById(id).textContent;
    
        let words = [];
        let startIndex = 0;
    
        for (let i = 0; i < text.length; i++) {
            if (text[i] === '(') {
                startIndex = i + 1;
            } else if (text[i] === ')') {
                words.push(text.slice(startIndex, i));
              
            }
        } 
        words=words.join(`; `);
        console.log(words)
    }
