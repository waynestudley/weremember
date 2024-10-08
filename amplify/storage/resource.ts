import { defineStorage } from "@aws-amplify/backend"

export const storage = defineStorage({
  name: "weremember",
  access: (allow) => ({
    "product-images/*": [
      allow.guest.to(["read"]),
      allow.authenticated.to(["read"]),
      allow.groups(["Admins"]).to(["read", "write", "delete"])
    ]
  })
})