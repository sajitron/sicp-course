(define (square x) (* x x))

(square 8)

(define (sum-of-squares x y) (+ (square x) (square y)))

(define (sum-square-largest-two a b c) (cond 
                                            ((and (<= a b) (<= a c)) (sum-of-squares b c))
                                            ((and (<= b a) (<= b c)) (sum-of-squares a c))
                                            (else (sum-of-squares a b))
))

(sum-square-largest-two 3 6 2)