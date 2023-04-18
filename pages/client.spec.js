class Client {

    constructor(page) {
        this.page = page
        this.page.getByRole('button', { name: 'Submit' })
    }
}