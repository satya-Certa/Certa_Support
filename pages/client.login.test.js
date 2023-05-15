export class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async visit(){
        await this.page.goto('https://internal.certaqa.com/');
    }

    async LoginType(){
        await this.page.getByRole('link', { name: 'Client/Prospect' })
    }
}