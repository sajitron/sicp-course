(define (square x) (* x x))

(square 8)

(define (sum-of-squares x y) (+ (square x) (square y)))

(define (sum-square-largest x y z) (cond
                                    ((and (<= x y) (<= x z)) (sum-of-squares y z))
                                    ((and (<= y z) (<= y x)) (sum-of-squares x z))
                                    (else (sum-of-squares x y))))


(sum-square-largest 3 6 2)