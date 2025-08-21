// Feature schema for Business Activity Tracker
// Add or modify fields as needed for your application

export interface Feature {
  id: string; // Unique identifier for the feature
  name: string; // Human-readable name
  description?: string; // Optional description of the feature
  enabled: boolean; // Is the feature active?
  createdAt: string; // ISO date string
  updatedAt?: string; // Optional ISO date string
  // Add more fields as required by your business logic
}
