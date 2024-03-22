<template>
   <div class="dashboard">
        <div class="dashboard-wrapper">
            <h1>
                Dashboard
            </h1>
            <div class="dashboard-card-wrapper">
                <div class="dashboard-card">
                    <div>
                        <router-link to="/oquvchilar"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.89 47.89 0 0 1 176 120m-48-32.43L57.3 64L128 40.43L198.7 64Z"/></svg>
                        </router-link>                    
                        <h2>
                            Oquvchilar soni
                        </h2>
                    </div>
                    <h1>
                        500
                    </h1>
                </div>
                <div class="dashboard-card">
                    <div>
                        <RouterLink to="/hodim"><svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="currentColor" d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91c-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62C.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38c.33-62.14-49.94-112.62-112-112.62m-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96M592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0"/></svg>
                        </RouterLink>                        
                        <h2>
                            Xodimlar soni
                        </h2>
                    </div>
                    <h1>
                        20
                    </h1>
                </div>
                <div class="dashboard-card">
                    <div> 
                        <router-link to="/video"> <svg class="saidbar-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="currentColor" d="M10.25 8A6.25 6.25 0 0 0 4 14.25v19.5A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75v-19.5A6.25 6.25 0 0 0 37.75 8zM18 18a1.5 1.5 0 0 1 2.218-1.317l11 6a1.5 1.5 0 0 1 0 2.634l-11 6A1.5 1.5 0 0 1 18 30z"/></svg></router-link>                  
                        <h2>
                            Darslar soni
                        </h2>
                    </div>
                    <h1>
                        400
                    </h1>
                </div>
                <div class="dashboard-card">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M2 5v14h20V5zm5 12a3 3 0 0 0-3-3v-4a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v4a3 3 0 0 0-3 3zm5-8c1.1 0 2 1.3 2 3s-.9 3-2 3s-2-1.3-2-3s.9-3 2-3"/></svg>
                        <h2>
                            Oylik foyda 
                        </h2>
                    </div>
                    <h1>
                        20000000 so`m
                    </h1>
                </div>
                <div class="dashboard-card">
                    <div>                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M2 22h28v2H2zm0 4h28v2H2zm22-16a2 2 0 1 0 2 2a2 2 0 0 0-2-2m-8 6a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2m-8 0a2 2 0 1 0 2 2a2 2 0 0 0-2-2"/><path fill="currentColor" d="M28 20H4a2.005 2.005 0 0 1-2-2V6a2.005 2.005 0 0 1 2-2h24a2.005 2.005 0 0 1 2 2v12a2.003 2.003 0 0 1-2 2m0-14H4v12h24Z"/></svg>
                        
                        <h2>
                            Jami foyda 
                        </h2>
                    </div>
                    <h1>
                        432000000 so`m
                    </h1>
                </div>
            </div>
        </div>
   </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
    .dashboard{
        margin-left: 310px;
        padding: 0 20px;
    }
    .dashboard-wrapper{
        padding: 10px 30px;
        padding-bottom: 30px;
        margin-top: 20px;
        border-radius: 10px;
        -webkit-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
        -moz-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
        box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
    }
    .dashboard-wrapper h1{
        color: white;
    }
    .dashboard-card{
        width: 100%;
        padding: 10px;
        -webkit-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
        -moz-box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
        box-shadow: inset 0px 0px 10px 0px rgba(78, 195, 224, 1);
        border-radius: 20px;
    }
    .dashboard-card h2{
        color: white;
        
    }
    .dashboard-card div{
        /* display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px; */
    }
    .dashboard-card svg{
        font-size: 50px;
        color: white;
        cursor: pointer;
    }
    .dashboard-card-wrapper{
        width: 100%;
        margin-top: 50px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .dashboard-card h1{
        margin-bottom: 20px;
    }
    @media(max-width:1650px){
        .dashboard-card-wrapper{
            flex-wrap: wrap;
        }
    }
    @media(max-width:650px){
        .dashboard{
            margin-left: 30px;
        }
    }
</style>