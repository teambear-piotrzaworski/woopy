# Woopy Node.js SDK

Official Node.js library for the **Woopy API**. Send alerts and notifications to your system with ease and full TypeScript support.

Site: https://woopy.dev/

## Installation

Install the package using your favorite package manager:

```bash
npm install woopy
```

Or:

```bash
yarn add woopy
```

---

## Quick Start

Initialize the Woopy client and trigger your first alert.

```javascript
// npm install woopy
import { Woopy } from 'woopy'

const woopy = new Woopy({
  apiKey: process.env.WOOPY_API_KEY,
})

// In your job / handler
async function processPayment(orderId) {
  try {
    await runPayment(orderId)
  } catch (error) {
    await woopy.alert({
      title: "Error occurred",
      description: error.message,
      actions: ['restart_job', 'flush_cache'],
    })
    throw error
  }
}
```

---

## API Reference

### `new Woopy(config)`
Creates a new Woopy client instance.

**`WoopyConfig` Interface:**

| Property | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `token` | `string` | **Yes** | Your secret API inbound token from the Woopy dashboard. |
| `baseUrl` | `string` | No | Custom API endpoint (e.g., for staging or testing). |

---

### `woopy.alert(data)`
Triggers an alert. Returns a `Promise<WoopyResponse>`.

**`WoopyAlertData` Object:**

| Property | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | **Yes** | The headline/title of the alert. |
| `body` | `string` | No | The main content/message of the alert. |
| `actions` | `string[]` | No | List of action keys for notification buttons (configured in web platform). |

**`WoopyResponse` Object:**
* `message`: `string` — Success message from the API.
* `error`: `string` (optional) — Error details if the request failed.

---

## TypeScript Support

This SDK is written with TypeScript in mind and includes built-in type definitions.

```typescript
import Woopy, { WoopyAlertData } from 'woopy';

const woopy = new Woopy({ token: '...' });

const alertData: WoopyAlertData = {
  title: "Critical Error",
  body: "Database connection lost.",
  actions: ["restart-jobs", "flush-cash"]
};

await woopy.alert(alertData);
```

## License

[ISC](LICENSE)