<template>
    <div class="container">
        <form>
            <div class="row w-100 h-100 justify-content-center">
                <div class="col">
                    <div class="mb-3">
                        <label for="name-form" class="form-label">Your name:</label>
                        <input v-model="name" name="name" type="text" class="form-control" id="name-form" placeholder="Your name">
                    </div>
                    <div class="mb-3">
                        <label for="email-form" class="form-label">Your email address:</label>
                        <input v-model="email" name="email" type="email" class="form-control" id="email-form" placeholder="Your email address">
                    </div>
                    <div class="mb-3">
                        <label for="message-form" class="form-label">Message:</label>
                        <textarea v-model="message" name="message" class="form-control" id="message-form" rows="5" placeholder="Message"></textarea>
                    </div>

                    <input type="submit" value="Send" @click="sendEmail">
                </div>
            </div>


        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
    name: "Contact",
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        sendEmail() {
            try {
                emailjs.send("service_fj5nhyx","template_ofkdzho",{
                    name: this.name,
                    email: this.email,
                    message: this.message
                }, 'user_uxtURyv8E1KWpkAgLRoWl');

            } catch(error) {
                console.log({error})
            }

            this.name = ''
            this.email = ''
            this.message = ''
        },
    }
}
</script>

<style scoped>

.container {
    display: block;
    margin:auto;
    /*width: 50%;*/
}

label {
    float: left;
    margin-left: 0.5rem;
    color: var(--LAVENDER);
}

input[type=submit] {
    background-color: var(--LAVENDER);
    color: var(--BLACK);
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}
</style>