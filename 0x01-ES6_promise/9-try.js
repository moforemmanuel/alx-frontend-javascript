export default function guardrail(mathFunction) {
  const queue = [];
  if (mathFunction()) {
    try {
      queue.push(mathFunction());
    } catch (error) {
      queue.push(error);
    } finally {
      queue.push('Guardrail was processed');
    }
  }
}
