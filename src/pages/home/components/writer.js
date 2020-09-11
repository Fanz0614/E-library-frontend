import React from 'react';
import {WriterWrapper,
        Recommondwriter,
        Changewriter,
        Writerdetail,
        Picwrapper
        } from '../style.js';

class Writer extends React.Component{
    render(){
        return(
            <WriterWrapper>
                <Recommondwriter>
                    Writer
                </Recommondwriter>
                <Changewriter>
                    Change
                </Changewriter>
                <Writerdetail>
                    Jacky
                    <Picwrapper className='circle'>
                        <img src='https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' />
                    </Picwrapper>
                    
                </Writerdetail>
                <Writerdetail>
                    Jacky
                    <Picwrapper className='circle'>
                        <img src='https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' />
                    </Picwrapper>
                    
                </Writerdetail>
                
            </WriterWrapper>
        )
    } 
}

export default Writer;