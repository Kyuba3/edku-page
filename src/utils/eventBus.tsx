type EventCallback = (data?: any) => void;

class EventBus {
  private events: Record<string, EventCallback[]> = {};

  subscribe(eventName: string, callback: EventCallback): () => void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);

    // Zwracanie funkcji do anulowania subskrypcji
    return () => {
      this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
    };
  }

  publish(eventName: string, data?: any): void {
    const event = this.events[eventName];
    if (event) {
      event.forEach(callback => {
        callback(data);
      });
    }
  }
}

const eventBus = new EventBus();
export default eventBus;