

const sendEmail = (name: string,  msg: string) =>{
    window.open('mailto:pbpranav24@gmail.com?subject='+name+'&body='+msg);
}

export {sendEmail};