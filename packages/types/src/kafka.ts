export type KafkaEnvelope<TPayload> = {
  topic: string;
  key: string;
  traceId: string;
  occurredAt: string;
  payload: TPayload;
};
