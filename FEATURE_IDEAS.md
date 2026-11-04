# Feature Ideas

Features that would make the tracker more useful, ordered by how much they'd help in day-to-day use. Each one builds on what's already in the app.

## High value, fairly quick

### 1. Search and sort the applications table
Once there are 30+ applications, scrolling to find one gets slow. Add a search box that filters by company or job title, and clickable column headers to sort by date, company or salary.

- Frontend only. `JobList` already filters by status, and search works the same way.

### 2. Save the Notes box
The application detail page has a Notes textarea, but the `Applications` model has no `Notes` field, so anything typed there is lost. Notes are where interviewer names, questions to ask and salary discussions go.

- Same steps as adding `location`: model property → migration (local **and** Supabase) → DTO field → the existing PATCH endpoint.

### 3. Edit the other fields
The job description can be edited, but not a typo in the company name, salary or location.

- UI only. The PATCH endpoint already accepts every field. Add an Edit button on the Details card using the same editor pattern as the description.

### 4. Job posting link
A `PostingUrl` field that's clickable from the detail page, for re-reading the listing before an interview.

## Bigger features

### 5. Follow-up reminders / "stale" flag
Highlight applications that have been on **Applied** for 2+ weeks with no change, as a nudge to follow up or move on.

- A simple version needs no backend: compare `appliedAt` with today and show a badge.

### 6. Interview dates and an activity timeline
Record events such as "Recruiter screen Oct 21" or "Technical interview Oct 30", and show them on the detail page's Activity panel.

- Needs a new table (one job has many events) and a new endpoint. Good practice for a one-to-many relationship in EF Core.

## Polish

### 7. Error messages the user can see
Failed saves and deletes currently only appear in the browser console. Show a small message such as "Couldn't save, try again".

- React Query's `isError` already provides the signal.

### 8. Export to CSV
One button that downloads every application as a spreadsheet, for backups or sharing with a career coach.

- Frontend only, built from the `jobs` data already loaded.

---

**Suggested starting point:** search/sort (1) and saving notes (2). They fix the biggest gaps in everyday use, and each takes about an afternoon.
