# ✍ mdblog
Markdown blog implementation for developers.

* **Fast**: Preact is on place, so it can't be slow ⚡.
* **Minimal**: Super simple structure  from [preact-minimal](https://github.com/aganglada/preact-minimal)
* **Easy to extend**: Markdown based, just add one more file to `posts/` and you're done 💪

### Usage

Clone the project 

```bash
git clone git@github.com:aganglada/mdblog.git
```

Enter the folder

```bash
cd mdblog
```

Install dependencies

```bash
yarn 
```

If you are using npm...

```bash
npm i
```

#### Run the dev server

```bash
npm run dev
```

You can start developing now on http://localhost:4000

#### Build assets for production

```bash
npm run prod
```

Running this command will create an `assets` folder that you can expose to your server. 

#### Production mode in local

```bash
npm run start
```

You can check on http://localhost:8080

### How to add post

> Can it be easier?

* Go to `posts/` folder in the root structure.
* Remove the example files.
* Add a new one.

### What's missing

* Pagination
* Themes
* Your suggestions


### Contributing

[Pull request](https://github.com/aganglada/mdblog/pulls) are more than welcome

### License

MIT