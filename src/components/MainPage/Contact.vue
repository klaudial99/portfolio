<template>
    <div class="container w-100">
        <form @submit.prevent="sendEmail">
            <div class="row w-100 h-100 justify-content-center mx-0">
                <div class="col-12 col-sm-11 col-md-9 px-4 px-sm-0">
                    <div class="mb-4">
                        <h3 class="text-start ms-2">{{ $t("contact.heading") }}</h3>
                    </div>
                    <div class="mb-3">
                        <label for="name-form" class="form-label">{{ $t("contact.name") }}</label>
                        <input v-model="name" name="name" type="text" class="form-control" id="name-form" :placeholder="$t('contact.nameInput')">
                    </div>
                    <div class="mb-3">
                        <label for="email-form" class="form-label">{{ $t("contact.mail") }}</label>
                        <input v-model="email" name="email" type="email" class="form-control" id="email-form" :placeholder="$t('contact.mailInput')">
                    </div>
                    <div class="mb-5">
                        <label for="message-form" class="form-label">{{ $t("contact.message") }}</label>
                        <textarea v-model="message" name="message" class="form-control" id="message-form" rows="7" :placeholder="$t('contact.messageInput')"></textarea>
                    </div>

                    <input class="send" type="submit" :value="$t('contact.send')">

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
        sendEmail(e) {
            try {
                emailjs.sendForm("service_fj5nhyx","template_ofkdzho",e.target,'user_uxtURyv8E1KWpkAgLRoWl',
                    {
                    name: this.name,
                    email: this.email,
                    message: this.message
                });

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
    margin:auto;
}

label {
    float: left;
    margin-left: 0.5rem;
}

.send {
    background-color: var(--VIOLET);
    color: white;
    padding: 12px 26px;
    border: none;
    border-radius: 5px;
}

.send:hover {
    background-color: var(--BLACK)
}
</style>