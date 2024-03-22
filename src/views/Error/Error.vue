<template>
    <div class="Error">
        <div class="ErrorPage">
            <h1>
                404
            </h1>
            <h2>
                 Nimadir Yetishmaypti
            </h2>
            <p>
                Kechirasiz, biz bu sahifani topa olmadik. Bosh sahifaga qayting ! 
            </p>
            <router-link class="linkHome" to="/" >Bosh sahifaga qaytish</router-link> 
        </div>
    </div>
    
</template>

<script setup>

</script>

<style lang="css" scoped>
.Error{
    height: 100vh;
    padding-top: 100px;
    background-color:#12111F;
}
.ErrorPage{

}
h1{
    font-weight:bold;
    color: white;
    font-size: 120px;
    text-align: center;
}
h2{
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 50px;
    text-align: center;
    margin-bottom: 10px;
}
p{
    margin-bottom: 10px;
    color: white;
    font-size: 20px;
    text-align: center;

}

.linkHome{
    text-align: center;
    text-decoration: none;
    display: block;
    width: 200px;
    padding:10px 15px;
    margin: 0 auto;
    margin-top: 30px;
    background-color:#4DC3DF;
    border: 1px solid #4DC3DF;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 0.5s;
}
.linkHome:hover{
    background-color: transparent;
}
@media(max-width:310px){
    h2{
        font-size: 30px;
    }
}
@media(max-width:210px){
    h1{
        font-size: 50px;
    }
    button{
        width: 100%;
    }
}
</style>