<template>
    <div class="saidbar">
        <div class="saidbar-logo">
            <img src="/img/favicon.ico" alt="">
            <h1>
                Virtual Talim
            </h1>
        </div>
        <div class="saidbar-line">      
        </div>
       <ul class="saidbar-menu">
        <li>
            <svg class="saidbar-icon" color="white" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg> 
            <router-link to="/" class="hover-text" >Dashboard</router-link>
        </li>
        <li>
            <svg class="saidbar-icon icon-1" xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="currentColor" d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91c-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62C.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38c.33-62.14-49.94-112.62-112-112.62m-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96M592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0"/></svg>
            <router-link to="/hodim" class="hover-text" >Hodimlar</router-link>
        </li>
        <li>
            <svg class="saidbar-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.89 47.89 0 0 1 176 120m-48-32.43L57.3 64L128 40.43L198.7 64Z"/></svg>
            <router-link to="/oquvchilar" class="hover-text">Oquvchilar</router-link>
        </li>
        <li>
            <svg class="saidbar-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" d="M10.25 8A6.25 6.25 0 0 0 4 14.25v19.5A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75v-19.5A6.25 6.25 0 0 0 37.75 8zM18 18a1.5 1.5 0 0 1 2.218-1.317l11 6a1.5 1.5 0 0 1 0 2.634l-11 6A1.5 1.5 0 0 1 18 30z"/></svg>
            <router-link to="/video" class="hover-text">Darslar</router-link>
        </li>
       </ul>
    </div>
    <div class="hamburger">

    </div>
</template>

<script setup>

</script>

<style lang="css">
    .saidbar{
        position: fixed;
        width: 300px;
        background-color: #12111F   ;
        padding-left: 15px;
        padding-top: 15px;
        height: 100%;
        border-right: 2px solid #4EC3E0;
    }
    .saidbar-logo h1{
        color: white;
        cursor: pointer;
    }
    .saidbar-logo img{
        width: 50px;
        cursor: pointer;
    }
    .saidbar-logo{
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .saidbar-line{
        margin-top: 20px;
        width: 90%;
        height: 1px;
        background-color: #4EC3E0;
    }
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    .saidbar-menu li a{
        font-size: 20px;
        color: #919EA0;
    }
    .saidbar-menu li svg{
        font-size: 30px;
        color: #919EA0;
    }
    .saidbar-menu li{
        cursor: pointer;
        margin-top: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .icon-1{
        font-size: 23px !important;
    }
    .saidbar-menu li:hover{
        .hover-text{
            color: white;
            transition: 0.5s;
        }
        .saidbar-icon{
            color: white;
            transition: 0.5s;
        }
    }
    @media(max-width:650px){
        .saidbar{
            display: none;
        }
    }
</style>