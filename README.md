# Copy LinkedIn Job Information

A simple Edge extension that allows users to copy job details from LinkedIn job postings directly to the clipboard with a single click.

## Features

- Adds a "Copy Job Details" button to LinkedIn job postings.
- Copies the following job information to the clipboard:
  - Company Name
  - Job Title
  - Location
  - Job URL
- Also adds a "Copy URL" button to copy the job URL directly.
- Works seamlessly on LinkedIn job listing pages.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/BharathASL/copy-linkedin-Job-information.git
   ```

2. Open Microsoft Edge and go to the Extensions settings:

   - Click on the menu icon (three horizontal dots) in the top-right corner.
   - Select **Extensions** from the dropdown.
   - At the bottom of the Extensions page, turn on **Developer Mode** (if it’s not already on).

3. Load the extension locally:

   - Click **Load Unpacked** and select the folder where you cloned the repository.
   - The extension should now be visible in the list of installed extensions.

## How to Use

1. Navigate to any LinkedIn job listing page (e.g., `https://www.linkedin.com/jobs/view/*`).
   
2. On the job details page, you will see two new buttons:
   - **Copy Job Details**: This button will copy the company name, job title, location, and job URL to your clipboard in a tab-separated format.
   - **Copy URL**: This button will copy just the job URL to your clipboard.

3. After clicking either button, the information will be copied to your clipboard and ready to paste anywhere.

## Example

On a LinkedIn job page, after clicking **Copy Job Details**, your clipboard will contain something like this:

```
Microsoft    Senior Software Engineer    Redmond, WA    https://www.linkedin.com/jobs/view/123456789
```

## Contributing

Contributions are welcome! If you'd like to improve the extension or fix any issues:

1. Fork this repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of the changes"
   ```
4. Push your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request to the main branch.

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.