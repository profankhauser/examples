class LamportClock
  attr_reader :timestamp

  def initialize
    @timestamp = 0
  end
  
  def tick
    @timestamp += 1
  end

  def update(incoming_timestamp)
    @timestamp = [@timestamp, incoming_timestamp].max
    tick
  end
end