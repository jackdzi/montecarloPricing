#ifndef MONTECARLO_HPP
#define MONTECARLO_HPP

#include <omp.h>
#include <string>

namespace montecarlo {

class Generator {

private:
  float _variance;
  std::string _ticker;
public:
  Generator();
  Generator(const std::string ticker, const float variance);
  ~Generator();
};

} // namespace montecarlo

#endif
